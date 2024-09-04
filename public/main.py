# Define the file path
file_path = "D:\\Dev\\NextJs\\freewsad\\public\\sitemap.xml"

# Read the file content
with open(file_path, "r") as file:
    content = file.read()

# Replace occurrences of 'freesad' with 'freewsad'
content = content.replace("freesad", "freewsad")

# Remove any occurrences of '/en'
content = content.replace("/en", "")

# Write the modified content back to the file
with open(file_path, "w") as file:
    file.write(content)

print("sitemap.xml has been updated successfully.")
