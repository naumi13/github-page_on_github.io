name: GitHub Actions Build and Deploy Demo
on:
  push:
    branches:
      - master
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
      uses: actions/checkout@master

    - name: Build and Deploy
      uses: JamesIves/github-pages-deploy-action@master
      env:
        # ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
        ACCESS_TOKEN: ${{ secrets.GA_ACCESS_TOKEN01 }}

        BRANCH: gh-pages

        # FOLDER: build
        FOLDER: ga-demo01_njs1/build

        # BUILD_SCRIPT: npm install && npm run build
        BUILD_SCRIPT: cd ga-demo01_njs1 && npm install && npm run build
