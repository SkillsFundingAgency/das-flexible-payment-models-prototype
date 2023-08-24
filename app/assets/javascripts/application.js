//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here
let total=8500;
  $('#apprenticeship-training-price, #apprenticeship-epa-price').focusout(function () {
    total = Number($('#apprenticeship-training-price').val().replaceAll(',', '')) + Number($('#apprenticeship-epa-price').val().replaceAll(',', ''));
    
    $('#apprenticeship-total-price').text('£' + total.toLocaleString('en-GB'));
  });

  $('#apprenticeship-total-price').text('£' + total.toLocaleString('en-GB'));
})
