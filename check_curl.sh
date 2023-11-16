curl -v -H "Authorization: token $GH_ACCESS_TOKEN" \
     -H "Accept: application/vnd.github.v3+json" \
     "https://api.github.com/repos/00000o1/janus/issues?since=$(date --utc +%Y-%m-%dT%H:%M:%SZ)&state=open"

