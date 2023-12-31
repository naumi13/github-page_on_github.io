name: GitHub Actions Build and Deploy Demo
on:
  push:
    branches:
      # - master
      - main
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
      # uses: actions/checkout@v2 # If you're using actions/checkout@v2 you must set persist-credentials to false in most cases for the deployment to work correctly.
      uses: actions/checkout@v3 # If you're using actions/checkout@v2 you must set persist-credentials to false in most cases for the deployment to work correctly.
      with:
        persist-credentials: false
    - name: Install and Build
      run: |
        cd ga-demo01_njs1 # ES20230818-1940: added "cd ga-demo01_njs1"
        npm install
        # npm run-script build
        npm run build
    - name: Deploy
      # uses: JamesIves/github-pages-deploy-action@releases/v3
      uses: JamesIves/github-pages-deploy-action@v4
      with:
        # ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
        # ACCESS_TOKEN: ${{ secrets.GA_ACCESS_TOKEN01 }}
        # TOKEN: ${{ secrets.GA_ACCESS_TOKEN01 }}
        token: ${{ secrets.GA_ACCESS_TOKEN01 }}
        # BRANCH: gh-pages
        # FOLDER: build
        # folder: build

        # FOLDER: ga-demo01_njs1/build
        folder: ga-demo01_njs1/build
