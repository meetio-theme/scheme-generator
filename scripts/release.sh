set -e
echo "Current version:" $(grep version package.json | sed -E 's/^.*"(4[^"]+)".*$/\1/')
echo "Enter release version: "
read VERSION

read -p "Releasing v$VERSION - are you sure? (y/n)" -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "Releasing v$VERSION ..."
  yarn run lint

  yarn run build
  # generate the version so that the changelog can be generated too
  yarn version --no-git-tag-version --no-commit-hooks --new-version $VERSION

  # changelog
  yarn run changelog

  echo "Please check the git history and the changelog and press enter"
  read OKAY

  # commit and tag
  git add CHANGELOG.md package.json
  git commit -m "chore(release): v$VERSION"
  git tag -a "v$VERSION" -m $VERSION

  # commit
  yarn publish --tag next --new-version "$VERSION" --no-commit-hooks --no-git-tag-version

  # publish
  git push origin refs/tags/v$VERSION
  git push
fi
