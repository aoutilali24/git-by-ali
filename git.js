function Git(name){
 this.name= name;
   this.lastCommitId = -1;
}

var repo = new Git("new-repo")
/**Actual command is > git init */

function Commit(id, message){
    this.id= id;
    //this is assuming that "this" has a "change" property too since implementing is beyond the scope of this simple recreation for now
    this.message= message;
}

Git.prototype.commit = function(message){
    var commit = new Commit(++this.lastCommitId, message);
    return commit;
}

repo.commit("is Commit working ?")
console.log(repo.commit("is Commit working?"));