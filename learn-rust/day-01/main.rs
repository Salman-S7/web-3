


fn main(){
	// let's learn Variables and immutability

	let num = 30;
	//num = 11; // this will give an error--> cannot assign twice to immutable variable 
	//because by default the varibles are immutable so we
	// can not change them

	println!("{}",num);

	//so make these mutable we should write them as
	let mut name = "salman";
	println!("{}", name); // this also warns because we are not mutating the name var so its not neccessary to make it mut

}
