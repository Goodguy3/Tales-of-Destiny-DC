import { runPythonScript } from "components/runPythonScript";
const handler = async (req, res) => {
  const results = await runPythonScript("scripts/HexToJpn.py", [
    req?.body?.input,
  ]);
  res.send(results);
};
export default handler;
