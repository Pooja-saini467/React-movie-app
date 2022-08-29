const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '053fb5dbac9e42fea8de0e88b40d0dc9',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;