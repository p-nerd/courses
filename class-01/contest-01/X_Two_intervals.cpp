#include <bits/stdc++.h>
using namespace std;

#define endn '\n'

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    long long int l1, r1, l2, r2, mn, mx;
    cin >> l1 >> r1 >> l2 >> r2;

    if (l1 <= l2 and l2 <= r1)
    {
        mn = min(l2, r1);  
        mx = max(l2, r1); 
        cout << mn << " " << mx << endn;
    }
    else if (l2 <= l1 and l1 <= r2)
    {
        mn = min(l1, r2);   
        mx = max(l1, r2);   
        cout << mn << " " << mx << endn;
    }
    else
    {
        cout << -1 << endn;
    }

    return 0;
}