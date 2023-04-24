import { GenreModel } from '../../models/genre';

const testGenres: GenreModel[] = [
  {
    genreId: '7692ec4e-1e11-45a5-8de8-51cf4110cac0',
    genre: 'Adventure',
  }, {
    genreId: 'cbf829f8-0af9-4579-a180-1261c27147b9',
    genre: 'Art',
  }, {
    genreId: 'e67741e4-3c9e-4cbf-a992-9d1bd2dd40e8',
    genre: 'Authobiography',
  }, {
    genreId: 'f9ce7c68-0cbf-4082-ab0c-3223c29896ee',
    genre: 'Buisness & Finance',
  }, {
    genreId: 'f3eca9f4-514f-4070-bd70-eb82254b8f60',
    genre: 'Children`s book',
  }, {
    genreId: '5f5e4d72-3db7-45be-81bc-1c6c547d979b',
    genre: 'Buisness & Finance',
  }, {
    genreId: '594af400-2749-450f-9f1f-96b83cdb9804',
    genre: 'Contemporary',
  }, {
    genreId: '115a8505-3b01-4d29-9ad9-6562b6b856a4',
    genre: 'Cookbook',
  }, {
    genreId: '82f14fb5-c9de-4f7e-8654-219bc60049ea',
    genre: 'Development',
  }, {
    genreId: 'cd700876-11d0-47f3-a9de-5a1e873e74c5',
    genre: 'Dystopian',
  }, {
    genreId: '83088a39-60c5-4e61-8d56-09be5235b73e',
    genre: 'Encyclopedia',
  }, {
    genreId: '409e9b83-151e-4596-8fc5-029447a3e164',
    genre: 'Epic',
  }, {
    genreId: '9aac6a47-b284-4e0d-94ac-0c5d17a53c78',
    genre: 'Families & Relationships',
  }, {
    genreId: '11188901-3bca-4399-8f4e-776dcce36e58',
    genre: 'Fantasy',
  }, {
    genreId: 'e87af96f-96a7-4597-873e-2e93a743e931',
    genre: 'Farce',
  }, {
    genreId: 'f553e028-0e28-4b99-812f-69e8f78cbe8d',
    genre: 'Fiction',
  }, {
    genreId: '36f1e803-5626-43b8-b5a8-c20ad111d49c',
    genre: 'Folklore',
  }, {
    genreId: '1c92e751-0a7c-44c6-a2a3-e0652e3f9108',
    genre: 'Gothic',
  }, {
    genreId: 'ccc6315c-73d4-423c-b9dc-f06c1b0ffa9e',
    genre: 'Guide / How-to',
  }, {
    genreId: 'cb7f9742-c34e-4b70-b727-a4e020e85233',
    genre: 'Health / Medicine',
  }, {
    genreId: '1c8ae369-1e0e-495c-8eb0-17ea0c79ea8a',
    genre: 'Historical-fiction',
  }, {
    genreId: '1797c4d8-9c4a-4d63-ba16-6842b61bd95e',
    genre: 'History',
  }, {
    genreId: 'b1c079ce-089f-475d-b08f-9188434020e4',
    genre: 'Horror',
  }, {
    genreId: '6be329e0-bca8-4009-97da-7047cfe23e7b',
    genre: 'Humor',
  }, {
    genreId: 'c10807f5-3cdb-4ff9-bf98-d82a6cc2b2b1',
    genre: 'Light fiction',
  }, {
    genreId: 'a654e875-677a-4be1-8de5-25677695f647',
    genre: 'Love story',
  }, {
    genreId: '856ef2fc-f1e1-430a-9071-5fcfb2cfe7c2',
    genre: 'Memoir',
  }, {
    genreId: 'c2eeb8f6-d914-4450-945a-7703ff9bc614',
    genre: 'Modernism',
  }, {
    genreId: '4e05898e-f500-481f-88eb-c5eb6b437949',
    genre: 'Motivational',
  }, {
    genreId: 'fb9cb9ee-147f-4c7a-ae34-e0a35b9c7a3a',
    genre: 'Non-fiction',
  }, {
    genreId: '80c5f163-21f3-427b-bfda-89cd6ccd4967',
    genre: 'Novella',
  }, {
    genreId: '1539fa97-71e8-4199-ac11-9a08909bc333',
    genre: 'Paranormal',
  }, {
    genreId: '8136cbfc-8256-4baa-b814-e4bda5c97098',
    genre: 'Poetry',
  }, {
    genreId: 'd3e4f1c5-8a59-4410-8d3f-6027ad5cdc7c',
    genre: 'Politics',
  }, {
    genreId: 'd9cfab3c-c834-42f7-81c0-aedccbabc02b',
    genre: 'Realism',
  }, {
    genreId: 'e92ea317-e3e1-4e42-bcad-b5e9cf4b9e6c',
    genre: 'Romance',
  }, {
    genreId: 'e74ca3cb-e5ef-4609-aff2-b9e0a9971144',
    genre: 'Sapens',
  }, {
    genreId: 'f7f76a58-02b1-48f4-bbbe-dedd1a47b850',
    genre: 'Satire',
  }, {
    genreId: '442255ad-621b-4ab1-8ff2-a5b9c48b1ecd',
    genre: 'Science-fiction',
  }, {
    genreId: '51e262ac-7619-4272-8970-d96f33692da4',
    genre: 'Self-help book',
  }, {
    genreId: '8f242977-2804-41f3-bd93-a2c2a74b9654',
    genre: 'Story',
  }, {
    genreId: 'd35538b3-d27f-4187-a21f-46598f470048',
    genre: 'Thriller',
  }, {
    genreId: 'd3a50a2e-877e-4ddc-bc8d-1180eb8a77f3',
    genre: 'Tragedy',
  }, {
    genreId: 'a7f6ecfd-2ec9-4e79-b4d6-cbff9ae699a7',
    genre: 'Travel',
  },
];

export default testGenres;
