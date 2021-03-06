# iGEM2020 - AstroBio
AstroBio is a well-curated, open-source software and database compiling literature findings on microgravity-induced gene expression changes in yeast, bacteria, and plants. AstroBio's database contains data from published microarray and RNA-seq experiments conducted either during spaceflight or under simulated microgravity conditions. These experimental datasets were retrieved and analyzed from the NCBI Gene Expression Omnibus (GEO) database and the NCBI Sequence Read Archive (SRA) database using the R software suite. Differential expression analysis was performed on datasets that have been curated for quality based on normal density plot distributions, a sufficient number of replicates for robust statistical analysis, as well as the quantity of near 1 false discovery rates. AstroBio allows users to search a specific gene, micro-organism, species, microgravity-induced gene regulation (upregulated versus downregulated), open reading frame, microgravity conditions (space-flown experiments versus simulated-microgravity experiments), and/or assay type (RNAseq versus microarray experiments). It also allows users to compare findings from different studies and to determine whether a change in the expression of a given Saccharomyces cerevisiae gene is specific to microgravity-induced stress when compared to other stressors such as heat shock.

---------------------------------------------------------------------------------------------------------------------------------------


#### Mnagaing GitHub
  
  Cloning
  
 * Open terminal
 * Choose directory
 * clone the program ```git clone https://github.com/MaherHassanain/iGEM2020.git```
 
Process for Repository

1. Create new branch locally
  * Branch name is a condensed description of the task done
  * Use ```git checkout -b branch_name``` to create branch locally

2. Commit changes to branch
  * ```git add name_of_file_to_add``` to add file (* for all files)
  * ```git commit -m "commit_message"``` to commit changes

3. Push changes to branch
  * ```push remote origin branch_name```
  * ```git push origin```

4. Pull request
  * When the task is finished, open a pull request on the branch
  * Set a reviwer to review the code and merge 
  
---------------------------------------------------------------------------------------------------------------------------------------

#### Contributors

* Maher Hassanain - Team Leader, Full Stack Developer (Express js, Node js, AJAX, jQuery, HTML, CSS, Bootstrap) , Database Management (MongoDB), Software Integration and Launching (AWS)
* Benjamin Clark - Transcritpomics Analysis (R), Shiny App Developer 
* Hajar Elmouddene - Content creator, Frontend Developer (HTML/CSS/Bootstrap/jQuery)
* Grecia Olano - Content creator, Frontend Developer (HTML/CSS/Bootstrap/jQuery)

---------------------------------------------------------------------------------------------------------------------------------------
 
#### OS Information

* Both the express app and the shiny app can run on vriaty of operating systems, including Windows, Linux, and macOS. 

---------------------------------------------------------------------------------------------------------------------------------------

#### Installation for AstroBio web App

Download
* Node Js https://nodejs.org/en/download/
    * Node version 8.9.4+ is preferred
    * NPM version 6.13.0+ is preferred
* Mongodb https://www.mongodb.com/try 
    * mongodb version 4.2.1+ is preferred

* Windows:
    * Ensure you have npm and node installed. You can check by writing the following commands in terminal
        * Node --version
        * npm -- version 
    * Create an empty folder, name it "db" in the following directory C:\data\db in your windows machine
    * Once the folder is created, go to terminal and navigate to the following directory  C:\Program Files\MongoDB\Server\(version)\bin
    * Once in bin directory, write the command "mongod", mongodb is now hosted in default port 27017
    * In case you wish to run your mongodb in another port, please make sure to edit code and adjust port number accordingly 
    * Mongodb can now be accessed via the mongo command
    
* MacOS:
    * Install Homebrew and XCode
    * You also have the option to install mongodb from terminal
         * brew update
        * brew install mongodb
        * mkdir -p /data/db
            * If permission was needed, 
                * sudo chown -R `id -un` /data/db
                * Then write password
         * mongod
         * Mongodb can now be accessed via the mongo command
    * Alternatively, one can also install it as follow:
        * brew tap mongodb/brew
        * brew install mongodb-community@4.4 
        * brew services start mongodb-community@4.4
        * mongod --config /usr/local/etc/mongod.conf --fork
        * Mongodb can now be accessed via the mongo command
    
* Linux:
    * Create repository file that can be accessed with yum command after choosing which version to install
    * Assuming we are going for version 4.4, create /etc/yum.d/mongodb-org-4.4.repo and add the following in the file:
    
      [mongodb-org-4.4]
      
      name=MongoDB Repository
      
      baseurl=https://repo.mongodb.org/yum/amazon/2013.03/mongodb-org/4.4/x86_64/
      
      gpgcheck=1
      
      enabled=1
      
      gpgkey=https://www.mongodb.org/static/pgp/server-4.4.asc
      
    * Then write the following commands
        * sudo yum install -y mongodb-org
        * sudo systemctl start mongod
        * You can verify status, sudo systemctl status mongod
        * Start mongodb service, sudo systemctl enable mongod
        * Mongodb can now be accessed via the mongo command
        * You can stop mongodb service, Stop >sudo systemctl stop mongod
        
#### Running AstroBio Application

 * Go to program directory where package.json is and write the following command:
    * npm start
    * Program will run on port 3000
    * Application can be accessed locally on http://localhost:3000/
    * Latest version of the program is currently running <a href="http://ec2-3-135-218-7.us-east-2.compute.amazonaws.com:3000/"> here </a>
---------------------------------------------------------------------------------------------------------------------------------------

#### Installation for Shiny Application

* Shiny app requires many packages in order to run successfully. 
* Therefore, we have created a setup_shiny.R which can be found in the repository in the following directory:
    * Concordia_Montreal/scripts/R/shinyApp/setup_shiny.R 
    * Running the setup_shiny.R code will install needed packages
* Now you can run app.R in Rstudio and explore the shiny app. The program can be found in Concordia_Montreal/scripts/R/shinyApp/app.R

* Latest version of the program is currently running <a href="http://ec2-3-16-161-145.us-east-2.compute.amazonaws.com:3838/shinyApp/"> here </a>

---------------------------------------------------------------------------------------------------------------------------------------

#### Installation for R scripts, transcriptomics analysis

* All R programs for data analytics are included in the following two directories: 
    * Concordia_Montreal/scripts/R/DEA/  
    * Concordia_Montreal/scripts/python
 * To set up all required packages for data analytics, run setup.R program which can be found in Concordia_Montreal/scripts/R/DEA/setup.R
 * Before running the program, make sure that all directories are set properly and points to the right files
 * Using Rstudio, you can run any of the GSE.R scripts
