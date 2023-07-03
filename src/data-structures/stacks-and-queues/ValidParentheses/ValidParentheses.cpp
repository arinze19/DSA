#include <iostream>
#include <iterator>
#include <map>
#include <stack>
using namespace std;

bool valid_parentheses(std::string s)
{
    stack<char> st;
    map<char, char> mp = {{'{', '}'},
                          {'[', ']'},
                          {'(', ')'}};

    for (int i = 0; i < s.length(); i++)
    {
        char head = st.top();
        // get the iterator object from find here 
        // check if it is equal to the last element in the stack
        // auto populate the stack with a dummy last value to guard against such cases 


        if (mp.find(head))
        {
            // if it's not a closing bracket, add it to the stack
            st.push(s[i]);
        }
        else if (s[i] != mp[head])
        {
            // if it's a closing bracket and it doesn't match what is popped from the stack, return false

            return false;
        }
        else
        {
            // if it's the closing bracket of what's on the stack, pop it out
            st.pop();
        }
    }

    return st.empty();
}

int main()
{
    // create your mapping
    // create your stack
}