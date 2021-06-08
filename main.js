const {app, BrowserWindow} = require('electron')

function createWin(location) {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile(location)
}

app.whenReady().then(() => {
  app.on('activate', function () {
    createWin("static/index.html")
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})