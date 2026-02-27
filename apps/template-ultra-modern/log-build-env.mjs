// #region agent log
const endpoint = 'http://127.0.0.1:7666/ingest/26c929ac-64ba-4947-b92f-84a9db45bac6';
const sessionId = '39e080';

/** Minimal build-time env logging for debug session (reproduced issue). */
async function logBuildEnv() {
  const fs = await import('fs');
  const path = await import('path');

  const tscBinPath = path.default.join(
    process.cwd(),
    'node_modules',
    '.bin',
    process.platform === 'win32' ? 'tsc.cmd' : 'tsc'
  );

  let hasTscBin = false;
  try {
    hasTscBin = fs.default.existsSync(tscBinPath);
  } catch {
    hasTscBin = false;
  }

  let typescriptResolved = null;
  try {
    // This will throw if TypeScript is not installed.
    // eslint-disable-next-line n/no-missing-require
    typescriptResolved = require.resolve('typescript');
  } catch {
    typescriptResolved = null;
  }

  const payload = {
    sessionId,
    runId: 'build-pre',
    hypothesisId: 'H1-H4',
    location: 'apps/template-ultra-modern/log-build-env.mjs:1',
    message: 'template-ultra-modern build environment',
    data: {
      cwd: process.cwd(),
      nodeVersion: process.version,
      envNodeEnv: process.env.NODE_ENV,
      npmLifecycleEvent: process.env.npm_lifecycle_event,
      npmLifecycleScript: process.env.npm_lifecycle_script,
      pathSnippet: (process.env.PATH || '').split(process.platform === 'win32' ? ';' : ':').slice(0, 5),
      hasTscBin,
      tscBinPath,
      typescriptResolved,
    },
    timestamp: Date.now(),
  };

  try {
    await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Debug-Session-Id': sessionId,
      },
      body: JSON.stringify(payload),
    });
  } catch {
    // Ignore HTTP issues; file log is secondary.
  }

  try {
    const logPath = path.default.resolve(process.cwd(), '..', '..', 'debug-39e080.log');
    await fs.default.promises.appendFile(logPath, JSON.stringify(payload) + '\n', 'utf8');
  } catch {
    // Ignore file write issues; build must not break due to logging.
  }
}

await logBuildEnv();
// #endregion

