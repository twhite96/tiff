#!/bin/bash

# Put posts in the correct directory

directory="src/posts"

# Prompt the user for the frontmatter
read -p "Enter the file title: " file_title
# read -p "Enter the excerpt: " excerpt
read -p "Enter the description: " description
IFS=',' read -p "Enter tags without quotes (comma-separated): " -a tags

read -p "Include timestamp in filename? (y/n): " include_timestamp

file_name="$(date +"%Y-%m-%d")-${file_title}.md"
date_now="$(date +"%Y-%m-%d")"
# Check the boolean flag
if [[ "$include_timestamp" =~ ^[Yy] ]]; then
    timestamp="_$(date +"%Y-%m-%d")"
else
    timestamp=""
fi

if [[ "$featured" = Yy ]]; then
  pin="true"
else
  pin="false"
fi

# Create the frontmatter

frontmatter=
{
  printf "---"
  printf "title: "$file_title""
  printf "date: "$date_now""
  printf "description: "$description""
  printf "---"

} > "$file_name"

# Create the directory if it doesn't exist
# mkdir -p "$directory"

# Navigate to the directory
# cd "$directory"

# Create the file and write content to it
echo <<< "$frontmatter" > "$file_name"

mv "$file_name" "$directory" 

# Display the created filename
echo "Post '$file_name' created with content in '$directory'."