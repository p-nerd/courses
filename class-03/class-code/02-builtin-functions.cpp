#include <bits/stdc++.h>
using namespace std;

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    cout << ceil(2.2) << '\n';
    cout << floor(2.8) << '\n';
    cout << round(2.5) << '\n';
    cout << llround(2.4) << '\n';

    cout << "log(16) = " << log(16) << '\n';
    cout << "log2(16) = " << log2(16) << '\n';
    cout << "log10(16) = " << log10(16) << '\n';

    cout << "abs(-69) = " << abs(-69) << '\n';

    cout << "sqrt(64) = " << sqrt(64) << '\n';
    cout << "cbrt(64) = " << cbrt(64) << '\n';
    cout << "pow(2, 5) = " << pow(2, 5) << '\n';

    int a = atoi("123");
    cout << a << "\n";
    long long int b = atoll("123");
    cout << b << "\n";

    cerr << "This is error\n";

    return 0;
}