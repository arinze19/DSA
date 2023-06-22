#include <iostream>
#include <fstream>

using namespace std;

int main()
{
    // ofstream outputFile("demo.txt"); // see if it uses relative paths
    // cout << "now writing data into output file" << endl;
    // outputFile << "Arinze \n";
    // outputFile << "Obi \n";

    // outputFile.close();
    // cout << "Done... \n";
    ifstream inputFile("demo.txt");
    std::string name;

    inputFile >> name;
    cout << name << endl;

    inputFile.close();
}