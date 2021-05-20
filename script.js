const sendBatches = (event) => {
    event.preventDefault();
    const { target: form } = event;
    console.log(form.elements['batches'].value);
}