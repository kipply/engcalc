#include <bits/stdc++.h>
using namespace std;
#define vi vector<int>
#define pdv pair<double, vi>

vector<vi> templates;
vector<vi> sequences;
double constants[5] = {M_PI, M_E, (1.0 + sqrt(5)) / 2, 0.5772156649, 3e8};
vector<pdv> pairs;

void templateSearch(vi &t, int c, int o, int d) {
	if (c + o == 0) {
		templates.push_back(t);
		return;
	}
	if (c > 0) {
		t.push_back(0);
		templateSearch(t, c - 1, o, d + 1);
		t.pop_back();
	}
	if (o > 0 && d > 1) {
		t.push_back(1);
		templateSearch(t, c, o - 1, d - 1);
		t.pop_back();
	}
	return;
}

void makeSequence(vi &s, int idx, int tidx) {
	if (idx == s.size()) {
		sequences.push_back(s);
		// insert 1 factorial
		// s.push_back(10);
		// sequences.push_back(s);
		// for (int i = s.size() - 2; i > 0; i--) {
		// 	s[i + 1] = s[i];
		// 	s[i] = 10;
		// 	sequences.push_back(s);
		// }
		// s.pop_back();
		return;
	}
	if (templates[tidx][idx] == 0) {
		for (int i = 0; i < 5; i++) {
			s[idx] = i;
			makeSequence(s, idx + 1, tidx);
		}
	}
	else {
		for (int i = 5; i < 10; i++) {
			s[idx] = i;
			makeSequence(s, idx + 1, tidx);
		}
	}
	return;
}

double evaluate(vi v) {
	vector<double> stack;
	for (int i = 0; i < v.size(); i++) {
		if (v[i] < 5) {
			stack.push_back(constants[v[i]]);
		}
		else if (v[i] < 10) {
			double a = stack[stack.size() - 2];
			double b = stack[stack.size() - 1];
			stack.pop_back();
			double ans;
			if (v[i] == 5)
				ans = a + b;
			else if (v[i] == 6)
				ans = a - b;
			else if (v[i] == 7)
				ans = a * b;
			else if (v[i] == 8) {
				if (abs(b) < 1e-6)
					return DBL_MAX;
				ans = a / b;
			}
			else if (v[i] == 9) {
				if (a < 1e-6)
					return DBL_MAX;
				ans = pow(a, b);
			}
			stack[stack.size() - 1] = ans;
		}
		else {
			stack[stack.size() - 1] = tgamma(stack[stack.size() - 1] + 1);
		}
	}
	return stack[0];
}

vi approximate(double target) {
	printf("Approximating %.10lf\n", target);
	int idx = lower_bound(pairs.begin(), pairs.end(), pdv(target, vector<int>())) - pairs.begin();
	if (abs(pairs[idx - 1].first - target) < abs(pairs[idx].first - target))
		idx--;
	double approx = pairs[idx].first;
	vi ans = pairs[idx].second;
	double error = abs(target - approx);
	if (error < 1e-3)
		return ans;
	vi errorApprox = approximate(error);
	ans.insert(ans.end(), errorApprox.begin(), errorApprox.end());
	if (approx < target)
		ans.push_back(5); // add error to approx
	else
		ans.push_back(6); // subtract error from approx
	return ans;
}

int main() {
	double target;
	scanf("%lf", &target);
	vi t;
	t.push_back(0);
	for (int i = 0; i < 5; i++) {
		int j = templates.size();
		templateSearch(t, i, i, 1);
		vi s(2 * i + 1);
		for (; j < templates.size(); j++) {
			makeSequence(s, 0, j);
		}
	}
	for (int i = 0; i < sequences.size(); i++) {
		pairs.push_back(pdv(evaluate(sequences[i]), sequences[i]));
	}
	printf("pairs.size() = %d\n", (int)pairs.size());
	sort(pairs.begin(), pairs.end());

	vi v = approximate(target);
	printf("Sequence: ");
	for (int i = 0; i < v.size(); i++) {
		printf("%d ", v[i]);
	}
	return 0;

	int idx = lower_bound(pairs.begin(), pairs.end(), pdv(target, vector<int>())) - pairs.begin();
	printf("Approximation: %.15lf\n", pairs[idx].first);
	printf("Sequence: ");
	for (int i = 0; i < pairs[idx].second.size(); i++) {
		printf("%d ", pairs[idx].second[i]);
	}
	printf("\n");
	printf("Approximation: %.15lf\n", pairs[idx - 1].first);
	printf("Sequence: ");
	for (int i = 0; i < pairs[idx - 1].second.size(); i++) {
		printf("%d ", pairs[idx - 1].second[i]);
	}
}