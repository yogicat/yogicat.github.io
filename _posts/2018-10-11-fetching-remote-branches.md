---
title: "Git: fetching all remote branches"
layout: post
date: 2018-10-11
categories: Blog
---

I was watching and following online workshop on the [Frontend Masters](https://frontendmasters.com) and the repository had more than 10 branches. I found it burdensome to pull all branches from remote so I `duck-duck-go` it and found this answer from stackoverflow.

..


```
git branch -r | grep -v '\->' | while read remote; do git branch --track "${remote#origin/}" "$remote"; done
git fetch --all
git pull --all
```

To update local branches which track remote branches
 `git pull --all`
It will work only for your local branches which track remote branches.
To track all remote branches
`git branch -r | grep -v '\->' | while read remote; do git branch --track "${remote#origin/}" "$remote"; done`



---

#### Fetch and Pull

**Fetch**

`$ git fetch origin`

`git fetch` only downloads new data from a remote repository - but it doesn't integrate any of this new data into your working files.


**Pull**

`$ git pull origin master`

`git pull`, updates your current HEAD branch with the latest changes from the remote server. This means that pull not only downloads new data; it also directly **integrates** it into your current working copy files.


..


answer from [https://stackoverflow.com/questions/10312521/how-to-fetch-all-git-branches](https://stackoverflow.com/questions/10312521/how-to-fetch-all-git-branches)
