const fs = require("fs");
const path = require("path");

console.log("===== 开始清理 =====");

// 删除 node_modules
deleteFolder(path.join(__dirname, "node_modules"));

// 删除 .cache 目录
deleteFolder(path.join(__dirname, ".cache"));

// 删除 package-lock.json
deleteFile(path.join(__dirname, "package-lock.json"));

console.log("===== 清理完成 =====");

function deleteFolder(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.rmSync(folderPath, { recursive: true, force: true });
    console.log(`已删除目录: ${path.basename(folderPath)}`);
  }
}

function deleteFile(filePath) {
  if (fs.existsSync(filePath)) {
    fs.rmSync(filePath, { force: true });
    console.log(`已删除文件: ${path.basename(filePath)}`);
  }
}
