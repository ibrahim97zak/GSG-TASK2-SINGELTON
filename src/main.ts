import { UserSession } from "./UserSession";



const session1 = UserSession.getInstance()
console.log(session1) // it will print user = null because there is no user yet
session1.setUser({id:1997,name:"ibrahimZak"})
console.log(session1.getUser())

//
const session2 = UserSession.getInstance()

console.log(session2.getUser())
session2.clearUser()// clearing the session2 
//
console.log(session1=== session2)// it should print true because they are from the same instance