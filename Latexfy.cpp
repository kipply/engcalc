#include <iostream>
#include <bits/stdc++.h>
using namespace std;

static vector<string> cst = {"\\pi ","e","\\varphi ","\\gamma ","c"};
static vector<int> odr = {0,0,2,1,2,2};

// 5:+, 6:-, 7:*, 8:/, 9:^, 10:!
// 0:+-, 1:/, 2:^*!, 3:num
string latexfy(vector<int> v) {
  vector<string> ex(v.size());// = new vector<string>();
  vector<int> exodr(v.size());// = new vector<int>();
  string ep;
  int ind = 0;
  for(int i=0; i< v.size(); i++){
    // cout << "i = " << i << endl;
    if(v[i] < 5){
      //cout << "Test" << endl;
      ex[ind] = cst[v[i]];
      exodr[ind] = 3;
      ind++;
    }

    
    if(v[i] >= 5 && v[i] < 10){
      if(v[i] == 5)
        ep = ex[ind-2] + " + "+ ex[ind-1];
      if(v[i] == 6){
        if(exodr[ind - 1] == 0)
          ex[ind - 1] = "\\left ("+ ex[ind - 1] +"\\right )";
        ep = ex[ind - 2] + " - " + ex[ind - 1];
      }
      if(v[i] == 7){
        for(int k=1; k < 3; k++)
          if(exodr[ind - k] <2)
            ex[ind - k] = "\\left (" + ex[ind -k] + "\\right )";
        if(ex[ind - 2] == ex[ind - 1] && exodr[ind - 2] == 3)
          ep = ex[ind - 2] + "\\cdot " + ex[ind -1];
        else
          ep = ex[ind - 2] + "" +ex[ind -1];
      }
      if(v[i] == 8)
        ep = "\\frac {" + ex[ind - 2] + "}{"+ ex[ind - 1] + "}";
      if(v[i] == 9){
        if(exodr[ind - 2] <3)
          ex[ind - 2] = "\\left ("+ex[ind - 2]+"\\right )";
        ep = ex[ind - 2] + "^{" + ex[ind - 1] +"}";
      }
      exodr[ind - 2] = odr[v[i] - 5];
      ex[ind - 2] = ep;
      ex[ind - 1] = "";
      exodr[ind - 1] = -1;
      ind--;
    }

    if(v[i] == 10){
      if(exodr[ind - 1] <3)
        ex[ind -1] = "\\left (" + ex[ind - 1] + "\\right )";
      ex[ind - 1] = ex[ind - 1] + "!";
      exodr[ind - 1] = 2;
    }
  }
  
  return ex[0];
}


int main(){
  vector<int> v = {0,0,5,0,7};
  std::cout << latexfy(v) << endl;
}
