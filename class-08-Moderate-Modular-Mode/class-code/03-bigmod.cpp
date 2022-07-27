// Bigmod
// Given 3 integers x,p,m
// Calculate x^p % m

// Hint
// 7^8 = 7^4 * 7^4
// 5^57 = 5^28 * 5^28 * 5

#include <bits/stdc++.h>
using namespace std;

#define lli long long int

lli power(lli x, lli p, lli mod)
{
    if (p == 1)
        return x % mod;

    lli rs = power(x, p / 2, mod);

    rs = (rs * rs) % mod;
    if (p % 2 == 1)
        rs = (rs * x) % mod;

    return rs;
    // O(log(p))
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    cout << power(2, 10, 1e9) << "\n";
}
