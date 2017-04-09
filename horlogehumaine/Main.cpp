#include <iostream>
#include <string>

using namespace std;

#include "Automate.h"
#include "Symbole.h"

#include "Etat.h"
#include "Affectation.h"
#include "Lexer.h"
#include "Etat00.h"


int main (int argc, char *argv[])
{
    Symbole* s = new Affectation();
	Automate a;
	Etat* e0 = new Etat00 ("Etat 0");
	e0->transition(a, s);


    return 0;
}
