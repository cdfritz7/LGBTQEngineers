## Deploying to AWS
  - In the `my-app` directory, run `$npm run build`, this
    creates files in `my-app/build/static/` that we will
    upload to AWS
  - Log into the AWS s3 management console at
  https://console.aws.amazon.com/s3/buckets/lgbt-website/?region=us-east-2&tab=overview
  - in the "Overview" tab, click 'Upload'
  - upload the static build files from `my-app/build/static/`

## Changing Content
 ### People Page and News Page
 Because these pages contain a bit more content that the other pages,
 they read in their contents from `.json` files stored in `my-app/src/data`

 To change these `.json` files, we have included some helper python scripts in
 `data_creators/` directory. Edit these scripts, and run them to generate
 new `.json` files.

 ### Other pages
 To edit these pages, simply edit the corresponding `.js` files in
 `my-app/src/`
