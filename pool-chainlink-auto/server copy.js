
app.use(express.json());

app.post("/rundeploy", (req, res) => {
  const deployCommand = "npx hardhat run scripts/deploy.js --network sepolia";

  exec(deployCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error.message}`);
      return res.status(500).send("Error deploying");
    }
    console.log(`Deploy output: ${stdout}`);
    res.status(200).send("Deployment successful");
  });
});
app.post("/runverify", (req, res) => {
  const deployCommand =
    "npx hardhat verify 0xE0a6688486e1a75B1b910B6fAbD0c31D7F09DeD5 --network sepolia";

  exec(deployCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error.message}`);
      return res.status(500).send("Error deploying");
    }
    console.log(`Deploy output: ${stdout}`);
    res.status(200).send("Deployment successful");
  });
const PORT = process.env.PORT || 4000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
