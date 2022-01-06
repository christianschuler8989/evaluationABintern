
# 1. Setup of trial(-files) #
* Inside "trials" every directory is considered to be a trial.
* Every one of these trials should contain the corresponding excerpts (video-snippets).
* In case of AB-Testing this needs to be not more than two files.
* All of these files also have to be in the directory "deeplsd.github.io/video/".
* Run "bash trials_reader.sh" and then move the resulting file "new_config.js" into "deeplsd.github.io/config"

# 2. Online submissions #
* The entry for "EnableOnlineSubmission" has to be set to true.
* The entry for "BeaqleServiceURL" has to be specified to receive the submissions.
