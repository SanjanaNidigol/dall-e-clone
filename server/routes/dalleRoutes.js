import express from 'express';
import * as dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello AI Image Generation App!');
});

router.post('/generate', async (req, res) => {
  try {
    const { text, font, size, fcolor, bcolor, type } = req.body;

    const img4meOptions = {
      method: 'GET',
      url: 'https://img4me.p.rapidapi.com/',
      params: {
        text,
        font,
        size,
        fcolor,
        bcolor,
        type,
      },
      headers: {
        'X-RapidAPI-Key': process.env.RAPIDAPI_API_KEY,
        'X-RapidAPI-Host': 'img4me.p.rapidapi.com',
      },
    };

    const response = await axios.request(img4meOptions);
    const image = response.data;

    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong with image generation' });
  }
});

export default router;













// import express from 'express';
// import * as dotenv from 'dotenv';
// // import { Configuration, OpenAIApi } from 'openai';

// import OpenAI from 'openai';

// const openai = new OpenAI({
// apiKey: process.env.OPENAI_API_KEY
// });

// dotenv.config();

// const router = express.Router();

// import express from 'express';
// import * as dotenv from 'dotenv';
// import OpenAI from 'openai';

// dotenv.config();

// const router = express.Router();

// const openai = new OpenAI({
// apiKey: process.env.OPENAI_API_KEY,
// });

// router.route('/').get((req, res) => {
// // res.send('Hello AI Image Generation App!' );
// res.status(200).json({ message: 'Hello from DALL-E!' });
// });

// router.route('/').post(async (req, res) => {
// try {
// const { prompt } = req.body;
// console.log('Received prompt:', prompt); 
// const aiResponse = await openai.createImage({
//     prompt,
//     n: 1,
//     size: '1024x1024',
//     response_format: 'b64_json',
//   });
  
//   const image = aiResponse.data[0].b64_json;
//   res.status(200).json({ photo: image });
// } catch (error) {
//     console.error(error);
//     res.status(500).send(error?.response.data.error.message || 'Something went wrong');
//     }
//     });
    
//     export default router;