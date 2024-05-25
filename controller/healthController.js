
const getHealth =((req, res) => {
  console.log('getHealth');
    res.status(200).json({ status: "OK", message: "Health check passed" });
 
});

const methodNotAllowed =  (req, res) => {
    res.status(405).json({ message: "Method not allowed" });
  }

module.exports = { getHealth, methodNotAllowed };

