// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.10;

import "hardhat/console.sol";

contract Domains {
  constructor() {
    console.log("Probando algo copado para escribir en consola");
  }

	 // A register function that adds their names to our mapping
	 // msg.sender es la wallet del que llama al contrato
	 // calldata - indica donde el argumento name será almacenado
	 // calldata es non-persistent y no puede ser modificado (se usa porque consume poco gas)  
	 function register(string calldata name) public {
      domains[name] = msg.sender;
      console.log("%s has registered a domain!", msg.sender);
  }

  // This will give us the domain owners' address
	// view luego de public indica que la funcion solo lee datos y no modificara nada
  function getAddress(string calldata name) public view returns (address) {
      return domains[name];
  }
}