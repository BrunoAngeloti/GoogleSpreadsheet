import credentials from '../../credentials/google_sheets_api.json'

import  {GoogleSpreadsheet}  from 'google-spreadsheet';

export default async function(req, res) {
  const doc = new GoogleSpreadsheet('1cu2T1YIWb_giPbOxu4RV91H3j5kMN9T0etTYjuCD1L0');

  await doc.useServiceAccountAuth({
    client_email: credentials.client_email,
    private_key: credentials.private_key,
  });

  await doc.loadInfo();

  /*if(req.method === 'POST'){
    await doc.addSheet({
      title:req.body.name,
      headerValues:[
        'petiano','pergunta1','pergunta2','pergunta3',
        'pergunta4','pergunta5','pergunta6',
        'pergunta7','pergunta8','pergunta9',
        'pergunta10','pergunta11','pergunta12','pergunta13'
      ]
    });//! cria a sheet
    await doc.addSheet({
      title:('Resumo'+req.body.name),
      headerValues:[
        'petiano','voto1','voto2','voto3',
        'voto4','voto5','voto6',
        'voto7','voto8','voto9',
        'voto10','voto11','voto12','voto13'
      ]
    });//! cria a sheet
    return res.status(200).send("sucesso");
  }*/

  if(req.method === 'DELETE'){
    const newSheet = doc.sheetsByTitle[req.body.name];//! busca a sheet
    await newSheet.delete();//! deleta a sheet
    return res.status(200).send("sucesso");
  }


  if(req.method === 'PUT'){
    const newSheet = doc.sheetsByTitle[req.body.name];//! busca a sheet
    await newSheet.addRow({petiano:"andre",pergunta1:"undefined",pergunta2:"undedined",pergunta3:"undefined"
    ,pergunta4:"undefined",pergunta5:"undedined",pergunta6:"undefined",
    pergunta7:"undefined",pergunta8:"undedined",pergunta9:"undefined",
    pergunta10:"undefined",pergunta11:"undedined",pergunta12:"undefined",
    pergunta13:"undefined"
  });
    return res.status(200).send("sucesso");
  }


  if(req.method === 'POST'){
    const sheet = doc.sheetsByTitle[req.body.name];//! busca a sheet
    
    const rows = await sheet.getRows();


    const names = rows.map(({petiano,pergunta1,pergunta2,pergunta3,pergunta4,pergunta5,pergunta6,pergunta7,pergunta8,pergunta9,pergunta10,pergunta11,pergunta12,pergunta13}) => {
    
       if(petiano === 'andre'){
        return {
          petiano,pergunta1,pergunta2,
          pergunta3,pergunta4,pergunta5,
          pergunta6,pergunta7,pergunta8,
          pergunta9,pergunta10,pergunta11,
          pergunta12,pergunta13
        } 
       }
        return;
    })
    //console.log(rows);
    
    return res.status(200).send(names);
  }




 // loads document properties and worksheets
//console.log(doc.title);

//const sheet = doc.sheetsByTitle["P??gina7"]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]

//await doc.addSheet(0)

//const testeName = await sheet.sheetId;
//await doc.deleteSheet(testeName);
//const rows = await sheet.getRows()




//const sheet = doc.sheetsByTitle["petiano7"]; //! para adicionar 
//await sheet.addRow({pergunta1:"undefined",pergunta2:"undedined",pergunta3:"undefined"});


//const newSheet = doc.sheetsByTitle["petiano"];//! busca a sheet
//await newSheet.delete();

/* 
const names = rows.map(({Avaliador, avalia????o, desempenho}) => {
  return {
    Avaliador,
    avalia????o,
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


