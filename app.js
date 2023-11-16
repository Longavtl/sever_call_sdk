const express = require('express');
const agora = require('agora-access-token');

const app = express();
const port = 3000;

// Thay thế bằng thông tin ứng dụng của bạn
const appId = '1528f286ca0347b8b2ffee2f21d15869';
const appCertificate = 'b9ca573fdbba4f9781dfe79c82f71b34';

app.get('/token/:channelName/:uid', (req, res) => {
  const channelName = req.params.channelName;
  const uid = req.params.uid;

  const expirationTimeInSeconds = 3600; // Token hết hạn sau 1 giờ

  const token = agora.RtcTokenBuilder.buildTokenWithUid(
    appId,
    appCertificate,
    channelName,
    uid,
    agora.RtcRole.PUBLISHER,
    expirationTimeInSeconds
  );

  res.json({ token });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});