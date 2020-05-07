enum HostKind {
    Domain = 0,
    IP = 1,
}

// Host is a legal IP address or DNS
function getHostKind(host: string): HostKind {
    const labels = host.split('.');

    let label: string;
    let num: number;
    for (label of labels) {
        num = Number(label);
        if (!Number.isInteger(num) || num < 0 || num > 255) {
            return HostKind.Domain
        }
    }

    return HostKind.IP;
}

export { HostKind, getHostKind };
