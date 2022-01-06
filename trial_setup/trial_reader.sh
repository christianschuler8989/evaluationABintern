#!/bin/bash

# Current working directory
#currentDirectory=$(pwd)

# Default directory in case of missing input: CurrentWorkingDirectory
currentDirectory=${1:-$PWD}

#testCounter=%03d # ZERO-PADDING?!
testCounter=0

# Variable Test-Names?
testName="TestName"

# Textfile for output of trial_sets
outputFile=${currentDirectory}"/new_config.js"

#echo "" > $outputFile

######################################
# Write the start of the config-file #
######################################
echo -e '// configure the test here
var TestConfig = {
  "TestName": "ABX Demo Test",
  "LoopByDefault": true,
  "ShowFileIDs": false,
  "ShowResults": false,
  "EnableABLoop": true,
  "EnableOnlineSubmission": false,
  //"BeaqleServiceURL": "/web_service/beaqleJS_Service.php",
  "BeaqleServiceURL": "",
  "SupervisorContact": "",
  "AudioRoot": "",
  "Testsets": [ '  >> $outputFile

#######################################
# Create a testset for each directory #
#######################################
for testsetDirectory in ${currentDirectory}"/trials"/* ;
do
	# Extract name of test from directory-name
  testName=${testsetDirectory#*"trials/"}
  # Start of every testset
  #echo '{ "Name": "'${testName}'", "TestID": "'`printf "%03d" "${testCounter}"`'", "Files": {' >> ${currentDirectory}"/tempTest.txt"
  # Alternative version ID <=> Name
  echo -e '{ \n' "\t"'"Name": "'`printf "%03d" "${testCounter}"`'", \n \t"TestID": "'${testName}'", \n \t"Files": \n\t{' >> $outputFile
  #############################################
  # Read video-file-names for current testset #
  #############################################
  itemCounter=0
  for filename in ${testsetDirectory}/*".mp4";
  do
    # Strip the filename of its path
    actualName=$(basename ${filename})
    # If it is the fist item (=0), then it is the reference
    if [[ ${itemCounter} = 0 ]]; then
      echo -e "\t""\t"'"A": "video/'${actualName}'",' >> $outputFile
    # If it is not the first item, use the itemCounter for naming
    else
      echo -e "\t""\t"'"B": "video/'${actualName}'",' >> $outputFile
    fi
    # Next file in this testset
    let itemCounter++
  done
  echo -e "\t"'} \n},' >> $outputFile
  # Next testset (directory)
  let testCounter++
done

echo -e ']
}' >> $outputFile


###################################################
# Transfer testsets into the beaglejs config-file #
###################################################
# For the time being done manually with the good old Copy-Paste-Combo



############
# Template #
############
: '
// configure the test here
var TestConfig = {
  "TestName": "ABX Demo Test",
  "LoopByDefault": true,
  "ShowFileIDs": false,
  "ShowResults": false,
  "EnableABLoop": true,
  "EnableOnlineSubmission": false,
  //"BeaqleServiceURL": "/web_service/beaqleJS_Service.php",
  "BeaqleServiceURL": "",
  "SupervisorContact": "",
  "AudioRoot": "",
  "Testsets": [
    //    
    {
      "Name": "Christians_Test",
      "TestID": "id1_1",
      "Files": {
            "A": "video/merkel00.mp4",
            "B": "video/merkel01.mp4",
        }
    },
  ]
}
'
