#!/bin/bash

# This script will compress all of the files into a zip one
# so that we are able to send the package to the webstore (chrome)

echo ----
echo "Creating the zip file for chrome webstore"
echo ----


ROOTDIR=$(pwd) 
EXTENSIONDIR=$ROOTDIR/extension
TEMPDIR=$ROOTDIR/tmp
ZIPPEDDIR=$ROOTDIR/zipped


if [ -d $ZIPPEDDIR ]; then
	rm -rf $ZIPPEDDIR
fi

mkdir $TEMPDIR
mkdir $ZIPPEDDIR

# Create a copy of the files to be compressed to a temporary folder
cp -r $EXTENSIONDIR $TEMPDIR
cd $TEMPDIR/extension
zip -r $ZIPPEDDIR/read-in-future.zip *

cd $ROOTDIR

# Undo what we did
rm -rf $TEMPDIR

echo "-----"
echo "Zip successfull!"
echo "Check it on: $ZIPPEDDIR"
echo "-----"