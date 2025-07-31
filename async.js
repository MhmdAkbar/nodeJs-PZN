function samplePromises() {
    return Promise.resolve('akbar')
} 

const name = await samplePromises();
console.info(name)