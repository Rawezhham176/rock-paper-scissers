#!/bin/sh
echo "-------------------------------------------"
read -p 'Enter the message:: ' MESSAGE
echo "-------------------------------------------"
git add .
git commit -m "$MESSAGE"
git push origin main
echo "-------------------------------------------"
echo "Commit pushed with the message: $MESSAGE"
echo "-------------------------------------------"


