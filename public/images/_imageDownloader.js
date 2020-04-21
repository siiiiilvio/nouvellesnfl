const fs = require('fs');
const axios = require('axios');
const { imageUrls } = require('../utils/constants');

const downloadImage = async (url, path) => {
    const response = await axios({
        url,
        responseType: 'stream',
    });
    const data = await response.data.pipe(fs.createWriteStream(path));
    return data;
};

const startDownload = async () => {
    for (const imgUrl of imageUrls) {
        const ext = imgUrl
            .substring(imgUrl.lastIndexOf('/') + 1)
            .split('?v=3')[0]
            .replace('100', '');
        await downloadImage(imgUrl, ext);
    }
};

startDownload();
