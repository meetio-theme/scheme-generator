import { Rules } from '../interfaces';
import { log } from './log';

interface ScopeRules extends Omit<Rules, 'scope'> {
    scope: string;
}

export function duplicated(rules: Rules[]): ScopeRules[] {
    const scopeRules: ScopeRules[] = [];
    const scopes = new Set();

    [rules].forEach((rule: Rules[]) => {
        rule.forEach((item: Rules) => {
            item.scope.forEach((i: string) => {
                if (scopes.has(i)) {
                    log.duplicated(i, item.name);
                }
                scopes.add(i);
            });

            scopeRules.push({
                name: item.name,
                scope: item.scope.toString(),
            });

            Object.assign(scopeRules[scopeRules.length - 1], item.settings);
        });
    });

    return scopeRules;
}
