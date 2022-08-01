#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gp ' '
#define lli long long int
#define vec vector
#define str string
#define all(x) x.begin(), x.end()

const lli mod = 109546051211;
const int inf = 1e9;

// 1 -> 1
// 2 -> 2
// 3 -> 3 * 2 = 6
// 4 -> 6 * 4 = 24
// 3 -> 24 / 4 = 6;

bool solve(int ti = 0)
{
    lli fac = 1, n;
    cin >> n;
    for (int i = 1; i <= n; i++)
        fac = fac * i % mod;

    lli ans = fac;
    for (int i = n; i >= 2; i--)
    {
        fac /= i;
        ans = ans * fac % mod;
    }

    cout << ans << ed;

    return true;
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    solve();

    return 0;
}
// github.com/shihab4t (Shihab Mahamud)
// Monday, August 01, 2022 | 04:40:36 PM (+06)
