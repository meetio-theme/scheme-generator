import { Rules } from '../interfaces';
import { log } from './log';

interface ScopeRules extends Omit<Rules, 'scope'> {
    scope: string;
}

export function duplicated(rules: Rules[]): ScopeRules[] {
    const scopeRules: ScopeRules[] = [];
    const scopes = new Set();

    rules.forEach((item: Rules) => {
        const newSettings = { ...item.settings }; // Create a new object with the same properties
        item.scope.forEach((i: string) => {
            if (scopes.has(i)) {
                log.duplicated(i.trim(), item.name.trim()); // Trim the strings before logging
            }
            scopes.add(i);
        });

        scopeRules.push({
            name: item.name.trim(),
            scope: item.scope.join(',').trim(), // Join the array and trim the resulting string
            settings: newSettings, // Use the new settings object
        });
    });

    return scopeRules;
}
