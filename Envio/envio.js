const axios = require('axios');

async function enviarMedicamento() {
  try {
    const medicamento = {
      resourceType: 'Medication',
      id: 'med001',
      code: {
        coding: [
          {
            system: 'http://www.nlm.nih.gov/research/umls/rxnorm',
            code: '219483',
            display: 'Aspirin'
          }
        ],
        text: 'Aspirin'
      }
    };

    const config = {
      headers: {
        'Content-Type': 'application/fhir+json'
      }
    };

    const response = await axios.post('https://sua-api-fhir.com/medicamentos', medicamento, config);
    console.log('Medicamento enviado com sucesso!');
    console.log('Resposta:', response.data);
  } catch (error) {
    console.error('Erro ao enviar medicamento:', error);
  }
}

enviarMedicamento();
