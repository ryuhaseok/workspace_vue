const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // npm run build 타겟 디렉토리 -> 해당 경로에 vue 빌드 출력물 생성됨
  outputDir: 'C:/javaStudy/workspace_sb/api-guestbook/src/main/resources/static'
})
