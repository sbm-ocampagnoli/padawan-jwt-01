const jwt = require('jsonwebtoken');
const secretKey = "skljaksdj9983498327453lsldkjf";

const nossoToken = jwt.sign(
    {
      email: 'nome@alura.com.br',
      password: 'HuEKW489!j445*',
    },
    secretKey,
    {
      expiresIn: '1y',
      subject: '1',
    }
  );

  console.log(nossoToken);

  console.log(jwt.decode(nossoToken));