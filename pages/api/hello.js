// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


//import credentials from '../../credentials/google_sheets_api.json'

import  GoogleSpreadsheet  from 'google-spreadsheet';

export default async function(req, res) {
    // Initialize the sheet - doc ID is the long id in the sheets URL
//const doc = new GoogleSpreadsheet('1cu2T1YIWb_giPbOxu4RV91H3j5kMN9T0etTYjuCD1L0');


// Initialize Auth - see more available options at https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
//await doc.useServiceAccountAuth({
  //client_email: credentials.client_email,
  //private_key: credentials.private_key,
//});

//await doc.loadInfo(); // loads document properties and worksheets
//console.log(doc.title);

//const sheet = doc.sheetsByTitle["Página7"]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]

//await doc.addSheet(0)

//const testeName = await sheet.sheetId;
//await doc.deleteSheet(testeName);
//const rows = await sheet.getRows()


//const newSheet = await doc.addSheet({title:"petiano7",headerValues:['pergunta1','pergunta2','pergunta3']});//! cria a sheet



//const sheet = doc.sheetsByTitle["petiano7"]; //! para adicionar 
//await sheet.addRow({pergunta1:"undefined",pergunta2:"undedined",pergunta3:"undefined"});


//const newSheet = doc.sheetsByTitle["petiano"];//! busca a sheet
//await newSheet.delete();

/* 
const names = rows.map(({Avaliador, avaliação, desempenho}) => {
  return {
    Avaliador,
    avaliação,
    desempenho
  }
}) */



//res.send({
  //aba:testeName,
  
//})

// adding / removing sheets
//const newSheet = await doc.addSheet({ title: 'hot new sheet!' });
//await newSheet.delete();
}


