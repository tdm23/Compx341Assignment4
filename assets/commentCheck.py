import os
import sys

for subdir, dirs, files in os.walk("./src"):
    # Loops through the files
    for file in files:
        # Checks if the file ends with 'xyzti.txt' if so grab the data
        if (file.endswith(".tsx") or file.endswith(".ts")):
            file_path = os.path.join(subdir, file)
            file_name = file.split("_")[0]
            # print(file_name)

            with open(file_path, mode='r') as f:
                reader = f.readlines()
                # print(reader[0])
                if(reader[0] != "// Name: Thevinu Mathusinghe  ID: 1365619\n"):
                    print(0)
                    sys.exit(0)

print(1)
sys.exit(0)
