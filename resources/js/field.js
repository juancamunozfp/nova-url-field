Nova.booting((Vue) => {
    Nova.inertia('index-url-field', require('./components/IndexField').default)
    Nova.inertia('detail-url-field', require('./components/DetailField').default)
    Nova.inertia('form-url-field', require('./components/FormField').default)
})
