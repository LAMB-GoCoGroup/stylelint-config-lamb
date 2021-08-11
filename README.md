# stylelint-config-lamb
LAMB style linter configuration to be shared across FE application to keep consistency.

## Use LAMB stylelint config
Add this package as a devDependency of the project.
```
npm install --save-dev git://github.com/LAMB-GoCoGroup/stylelint-config-lamb.git
```
On the root of the project create a `.stylelintrc.json` and extend the configuration
```
{
  "extends": ["stylelint-config-lamb"]
}
```

