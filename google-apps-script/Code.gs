/**
 * Google Apps Script — endpoint do formulário do portfólio.
 * Envia e-mail com MailApp (infraestrutura Google) para a sua caixa Gmail.
 *
 * Implementação: script.google.com → Novo projeto → colar este ficheiro → Implantar → Novo implantação →
 * Tipo: aplicativo da Web → Executar como: Eu → Quem pode aceder: Qualquer pessoa → Copiar URL (/exec).
 */
var CFG = {
  /** Destinatário (normalmente o mesmo Gmail que possui o script). */
  recipient: 'lenilsonpinheiro@gmail.com',
  /** Após envio bem-sucedido, o visitante é redirecionado para esta URL. */
  returnUrl: 'https://lenilsonpinheiro.github.io/portfolio2026/?sent=1#contact',
};

function doGet() {
  return ContentService.createTextOutput(
    'Portfolio contact: use POST (application/x-www-form-urlencoded) from the site form.'
  ).setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  var ret = CFG.returnUrl;
  var okHtml =
    '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>OK</title></head><body>' +
    '<p>Redirecting…</p>' +
    '<script>location.replace(' +
    JSON.stringify(ret) +
    ');</script></body></html>';

  try {
    if (!e || !e.parameter) {
      throw new Error('no_parameters');
    }
    var p = e.parameter;
    if (p.hp && String(p.hp).trim() !== '') {
      throw new Error('honeypot');
    }

    var name = String(p.name || '')
      .trim()
      .substring(0, 120);
    var email = String(p.email || '')
      .trim()
      .substring(0, 120);
    var message = String(p.message || '')
      .trim()
      .substring(0, 4000);

    if (!name || !email || !message) {
      throw new Error('required');
    }
    if (email.indexOf('@') < 1) {
      throw new Error('email');
    }

    MailApp.sendEmail({
      to: CFG.recipient,
      subject: '[Portfolio] ' + name,
      replyTo: email,
      body:
        'From: ' +
        name +
        ' <' +
        email +
        '>\n\n' +
        message +
        '\n\n---\nSent via portfolio contact form (Google Apps Script).',
    });

    return HtmlService.createHtmlOutput(okHtml).setTitle('Sent');
  } catch (err) {
    var back = ret.split('?')[0] + '#contact';
    var href = String(back).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
    var errHtml =
      '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>Error</title></head><body>' +
      '<p>Could not send. Please email lenilsonpinheiro@gmail.com directly.</p>' +
      '<p><a href="' +
      href +
      '">Back to portfolio</a></p></body></html>';
    return HtmlService.createHtmlOutput(errHtml).setTitle('Error');
  }
}
