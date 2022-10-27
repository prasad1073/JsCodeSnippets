#include<iostream>
#include<fstream>
#include<string.h>
#include<stdlib.h>
using namespace std;
int main(int argc, char*argv[])
{
	int sum=0;
	int i;
	fstream f1;
	f1.open(argv[1],ios::in | ios::out);
	char line[80];
	while(f1)
	{
		f1.getline(line,80);
		cout<<endl<<line;
		int a=atoi(line);
		sum=sum + a;
	}
	cout<<"sum of all nos in the file="<<sum;
}
